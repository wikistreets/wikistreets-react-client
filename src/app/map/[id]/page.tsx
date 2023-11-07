import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Header from "@/components/Header/Header";
import MapFeedContainer from "@/components/MapFeedContainer/MapFeedContainer";

export default function Map({ params }: { params: { id: string } }) {
  return (
    <>
      <MapFeedContainer style="my-4 md:my-8" />
      <GetInTouch />
    </>
  );
}
