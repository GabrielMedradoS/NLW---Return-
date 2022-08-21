import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export function FeedbackContentStep({
  feedbackType,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <span className="text-xl leading-6">{feedbackTypeInfo.title}</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
