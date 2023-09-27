export function ThemeManager(ElementScheme,ElementID,ButtonID,LStorageID) {
  let Theme; 
  if (ElementScheme.matches) {
    ElementID.classList.toggle("light-theme");
    ButtonID.classList.toggle("bi-moon-fill");
    Theme = ElementID.classList.contains("light-theme") ? "light" : "dark";
  } else {
    ElementID.classList.toggle("dark-theme");
    ButtonID.classList.toggle("bi-brightness-high-fill");
    Theme = ElementID.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem(LStorageID, Theme);
};
