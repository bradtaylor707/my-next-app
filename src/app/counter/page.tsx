import Counter from "@/app/counter/counter";
import BackButton from "@/components/back-button";

export default function Page() {
  return (
    <div id={"counter-page"}>
      <BackButton />
      <Counter />
    </div>
  );
}
