import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { toggleVariants } from "@/components/ui/toggle-variants";

export const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
    size: "default",
    variant: "default",
});