import { cn } from "~/lib/utils";
import { Logo } from "../_components/logo";

export function Header() {
  return (
    <header>
      <div className={cn("max-w-7xl mx-auto px-4 py-4")}>
        <Logo />
      </div>
    </header>
  );
}
