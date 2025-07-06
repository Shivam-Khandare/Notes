import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 md:mr-6 md:mb-0 bg-primary/20 rounded-full p-4">
              <ZapIcon className="size-16 text-primary"/>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">Rate Limit Reached</h1>
              <h2 className="text-base-content mb-1">
                You've made too many requests in a short period. Please wait for
                a moment.
              </h2>
              <h3 className="text-sm text-base-content/70">Try again in a few seconds for the best experience</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
