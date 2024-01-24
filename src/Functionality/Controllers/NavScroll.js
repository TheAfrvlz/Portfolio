export function ScrollManager(OnMotionPrev,OnMotionCurrent,OnChange,Feature) {
  if (OnMotionCurrent == 0) {
    OnChange.style.backgroundColor = "#0000";
    OnChange.style.backdropFilter = "none";
  }
  if (OnMotionPrev > OnMotionCurrent) {
    OnChange.style.top = "0";
  } else {
    OnChange.style.top = Feature;
    OnChange.style.backgroundColor = "#dce2e60c";
    OnChange.style.backdropFilter = "blur(2px)";
  }
}
