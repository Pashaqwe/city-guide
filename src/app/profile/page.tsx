import { Profile, ProfileSkeleton } from "@/widgets";
import { Suspense } from "react";

function ProfilePage() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <Profile />
    </Suspense>
  );
}

export default ProfilePage;
