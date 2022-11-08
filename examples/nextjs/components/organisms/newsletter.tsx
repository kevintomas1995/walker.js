import { AccountBox } from "../molecules/account";
import { ButtonPrimary } from "../molecules/buttons";
import { trackInput } from "../../utils/customEvents";

export default function Newsletter() {
  return (
    <AccountBox entity="newsletter">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block my-5">
          Sign up for our newsletter
        </span>
      </h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
           onFocus={(e) => {
              trackInput(e, "account focus");
            }}
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
            className="block p-1 w-full shadow-sm focus:ring-elbwalker-500 focus:border-elbwalker-500 sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <ButtonPrimary action="submit" label="Notify me"></ButtonPrimary>
        </div>
        <div className="text-xs leading-5 text-gray-500">
            <p>
              By signing up, you agree to our{' '}
              <span className="font-medium text-gray-900 hover:underline">
                Terms
              </span>
              ,{' '}
              <span className="font-medium text-gray-900 hover:underline">
                Data Policy
              </span>{' '}
              and{' '}
              <span className="font-medium text-gray-900 hover:underline">
                Cookies Policy
              </span>
              .
            </p>
          </div>
      </form>
    </AccountBox>
  );
}
