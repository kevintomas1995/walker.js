import { AccountBox } from "../molecules/account";
import { ButtonPrimary } from "../molecules/buttons";
import { trackInput, checkPassword } from "../../utils/customEvents";
import { MouseEvent, useState } from "react";

export function AccountLogIn() {
  return (
    <AccountBox entity="account">
      <form className="space-y-6">
        <div>
          <label htmlFor="mobile-or-email" className="sr-only">
            Mobile number or email
          </label>
          <input
            onFocus={(e) => {
              trackInput(e, "account focus");
            }}
            type="text"
            name="mobile-or-email"
            id="mobile-or-email"
            autoComplete="email"
            placeholder="Mobile number or email"
            required
            className="block w-full shadow-sm focus:ring-elbwalker-500 focus:border-elbwalker-500 sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
            className="block w-full shadow-sm focus:ring-elbwalker-500 focus:border-elbwalker-500 sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <ButtonPrimary action="login" label="Login"></ButtonPrimary>
        </div>
      </form>
    </AccountBox>
  );
}

export function AccountSignUp() {
  const [password, setPassword] = useState("");
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (password.length < 8) {
      e.preventDefault();
      checkPassword("account");
    }
  }

  return (
    <AccountBox entity="account">
      <div className="mt-6">
        <form onSubmit={console.log} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              onFocus={(e) => {
                trackInput(e, "account focus");
              }}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Full name"
              required
              className="block w-full shadow-sm focus:ring-elbwalker-500 focus:border-elbwalker-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="mobile-or-email" className="sr-only">
              Mobile number or email
            </label>
            <input
              onFocus={(e) => {
                trackInput(e, "account focus");
              }}
              type="text"
              name="mobile-or-email"
              id="mobile-or-email"
              autoComplete="email"
              placeholder="Mobile number or email"
              required
              className="block w-full shadow-sm focus:ring-elbwalker-500 focus:border-elbwalker-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              className="block w-full shadow-sm focus:ring-elbwalker-500 focus:border-elbwalker-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <ButtonPrimary
              action="signup"
              label="Create your account"
              onClick={handleSubmit}
            ></ButtonPrimary>
          </div>
          <div className="text-xs leading-5 text-gray-500">
            <p>
              By signing up, you agree to our{" "}
              <span className="font-medium text-gray-900 hover:underline">
                Terms
              </span>
              ,{" "}
              <span className="font-medium text-gray-900 hover:underline">
                Data Policy
              </span>{" "}
              and{" "}
              <span className="font-medium text-gray-900 hover:underline">
                Cookies Policy
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </AccountBox>
  );
}
