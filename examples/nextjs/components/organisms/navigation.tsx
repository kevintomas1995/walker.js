import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const navigation = [{ name: "Home", href: "/" }];

export default function Navigation() {
  return (
    <header className="bg-elbwalker-600">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Top"
        data-elb="navigation"
      >
        <div className="w-full py-6 flex items-center justify-between border-b border-elbwalker-500 lg:border-none">
          <div className="flex items-center">
            <a
              href="/"
              data-elbaction="click"
              data-elb-navigation="navigation_item: Logo"
            >
              <span className="sr-only">Next.js Demo</span>
              <Image src={logo} alt="" width={80} height={80} />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  className="text-base font-medium text-black"
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              className="inline-block bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-elbwalker-600 hover:bg-white"
              key="Log In"
              href="/login"
              data-elbaction="click"
              data-elb-navigation="navigation_item: Log In"
            >
              Log In
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              className="text-base font-medium text-black hover:text-white"
              key={link.name}
              href={link.href}
              data-elbaction="click"
              data-elb-navigation={`navigation_item: ${link.name}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
