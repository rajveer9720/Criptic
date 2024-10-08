import Logo from '@/components/ui/logo';
import Image from '@/components/ui/image';
import SignUpForm from '@/components/auth/sign-up-form';
import AnchorLink from '@/components/ui/links/anchor-link';

// import images and icons
import BitcoinImg from '@/assets/images/bit-coin.png';
import GoogleIcon from '@/assets/images/google-icon.svg';
import routes from '@/config/routes';

export default function SignUp() {
  return (
    <>
      <div className="grid flex-grow grid-cols-1 gap-0 lg:grid-cols-[1fr_40%] 3xl:grid-cols-2">
        <div className="flex items-center justify-center py-14">
          <div className="grid w-full max-w-[408px] grid-cols-1 gap-4 px-4">
            <div className="mx-auto mb-2 w-20 lg:ml-0 xl:w-24">
              <Logo className="!w-full" />
            </div>
            <div className="mb-5 text-center lg:text-left">
              <h2 className="mb-2 text-xl font-medium uppercase dark:text-white lg:text-2xl">
                Create New Account
              </h2>
              <p className="text-sm text-[#4B5563] dark:text-gray-300">
                Welcome! Lets fill information and create account
              </p>
            </div>
           
            <SignUpForm />
            <p className="text-sm tracking-[0.5px] text-[#4B5563] dark:text-gray-300">
              Already have an account?
              <AnchorLink
                href={routes.signIn}
                className="ml-2 font-medium underline dark:text-gray-300"
              >
                Sign In
              </AnchorLink>
            </p>
          </div>
        </div>
        <div className="relative hidden bg-[#F3F4F6] lg:block">
          <Image src={BitcoinImg} alt="sign-up" fill className="object-cover" />
        </div>
      </div>
    </>
  );
}
