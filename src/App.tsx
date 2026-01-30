import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {LanguageProvider} from "@/hooks/useLanguage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <BrowserRouter>
                <Routes>
                    {/* Redirect root to /en */}
                    <Route path="/" element={<Navigate to="/en" replace/>}/>

                    {/* Language-prefixed routes */}
                    <Route
                        path="/:lang"
                        element={
                            <LanguageProvider>
                                <Index/>
                            </LanguageProvider>
                        }
                    />

                    {/* Catch-all for 404 */}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
