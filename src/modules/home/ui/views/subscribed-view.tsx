import { SubscribedVideosSection } from "../sections/subscribed-videos-section";

export const SubscribedView = () => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-bold">订阅</h1>
        <p className="text-xs text-muted-foreground">你喜欢的创作者的视频</p>
      </div>
      <SubscribedVideosSection />
    </div>
  );
};
