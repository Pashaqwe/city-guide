import { ReactNode, Suspense } from "react";

import { ProfileSkeleton } from "@/features";

type TProfileLayoutProps = { children: ReactNode };

function ProfileLayout({ children }: Readonly<TProfileLayoutProps>) {
  return <Suspense fallback={<ProfileSkeleton />}>{children}</Suspense>;
}

export default ProfileLayout;
