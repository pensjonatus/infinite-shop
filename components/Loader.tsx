import { Spinner } from "@radix-ui/themes";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner className="w-8 h-8 text-primary-500" />
    </div>
  );
};
