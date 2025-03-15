import { Profile } from "@/widgets";
import { Suspense } from "react";
import { ProfileSkeleton } from "./ui/ProfileSkeleton";

function ProfilePage() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <Profile />
    </Suspense>
  );
}

export default ProfilePage;
