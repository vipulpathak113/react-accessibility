export default function ColorIndependence() {
  return (
    <div className="m-2">
      <h1 className="text-center text-2xl mt-5 mb-5 bg-black text-white">
        Color Independence
      </h1>
      <div>
        Ensure that color is not used as the only visual means of conveying
        information, indicating an action, prompting a response, or
        distinguishing a visual element. You can still use color and
        color-coding, just not as the sole means of differentiating multiple
        things.
      </div>

      <div className="text-base font-semibold m-2">
        There are various best practices:
      </div>
      <ul className="list-decimal list-inside">
        <li className="font-bold mr-1">
          Check for color independence as you’re designing, and do so by using
          the grayscale test.
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">For error message styling: </span>{" "}
          Indicate errors by adding/changing something structural (e.g. add an
          icon, indent/offset the field) as opposed to swapping a current color
          (e.g. gray field border changes to red).
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">
            For current menu items (and other “selected” states):
          </span>
          Style the currently selected menu item with a color independent
          indicator (not just a color change), or use relative luminance.
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          For links that have surrounding text, underline them; for links that
          are standalone, use bold.
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">
            For progress trackers / progress indicators (and other similar UI
            elements):
          </span>
          Start by designing all three states for the steps in a progress
          tracker (past, current, and future) in one shade to avoid using color
          to convey meaning, and then make them visually unique using non-color
          styling, and finally add color as the secondary visual cue.
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">
            For bar charts (and other similar data visualizations):
          </span>
          Use pattern fills for bar charts and other similar data visualizations
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">For data visualizations: </span> Use
          interactivity in data visualizations to allow users to pinpoint
          specific numbers, and to view individual graph elements isolated.
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">
            For line graphs (and other similar data visualizations):
          </span>
          Use dashed/dotted line styles, and/or varying line widths, for line
          graphs and other similar data visualizations.
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">For data visualizations: </span> Use
          other non-color indicators, like shapes, labels, or icons, to make
          data visualizations color independent (when pattern fills or line
          styles are not feasible).
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">For any colored UI elements: </span>
          Combine multiple color independence tactics for a more failproof
          design that’s more usable for all.
        </li>
        <hr></hr>
      </ul>
    </div>
  );
}
