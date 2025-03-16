import { Profile } from "@/widgets";
import { Suspense } from "react";
import { ProfileSkeleton } from "./ProfileSkeleton";

function ProfilePage() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <Profile />
    </Suspense>
  );
}

export default ProfilePage;
