export default function StylingInteracting2() {
  return (
    <div className="m-2">
      <h1 className="text-center text-2xl mt-5 mb-5 bg-black text-white">
        Styling Interactive Elements (Part2: Links and Like)
      </h1>
      <div>
        Make links consistent with each other and visually different from
        non-clickable text (while using color-blind-friendly styling), so that
        people can tell what’s actionable simply by looking at the interface and
        not have to sweep it with their mouse (or other pointing device) to find
        out.
      </div>

      <div className="text-base font-semibold m-2">
        There are various best practices:
      </div>
      <ul className="list-decimal list-inside">
        <li>
          <span className="font-bold mr-1">
            A user-friendly way to style links is to:{" "}
          </span>
          <ul className="list-disc list-inside ml-5">
            <li className="font-bold mr-1">
              Underline links that have surrounding text.
            </li>
            <li>
              <span className="font-bold mr-1">
                Bold links that are standalone.
              </span>{" "}
              (This is if you’re not using an underline.) Or use some other
              color independent styling — meaning, styling that you could see
              even if you were completely color-blind.
            </li>
            <li>
              <span className="font-bold mr-1">
                Make them some shade of blue.
              </span>{" "}
              We don’t forget color, which helps non-color-blind users. Blue is
              the safest choice for a link color, but studies have shown that
              other colors work almost as well when done with consistency.
            </li>
          </ul>
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">
            Don’t want to use underlining for your links? 3 alternatives to
            indicate a link without using underlining:
          </span>
          <ul className="list-disc list-inside ml-5">
            <li>
              <span className="font-bold mr-1">Strategy #1:</span>
              Use other text styling, like bold (or italics, font size,
              typeface, border).
            </li>
            <li>
              <span className="font-bold mr-1">Strategy #2:</span>
              Use a luminous link color PLUS some non-color styling (such as an
              underline) for “on hover”, and another (such as a border) for “on
              focus”.
            </li>
            <li>
              <span className="font-bold mr-1">Strategy #3:</span>
              Use solitary placement (often with bolding or smaller all caps).
              Place the link away from other text so it’s standalone (not part
              of a sentence or paragraph). Its placement, coupled with its other
              styling like bolding, will indicate that it’s a link.
            </li>
          </ul>
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">
            Pick your link styling and stick to it:
          </span>
          Whichever appearance you choose for links, apply that same treatment
          consistently throughout the digital product.
        </li>
        <hr></hr>
        <li>
          <span className="font-bold mr-1">
            Reserve three things for links only, whether you choose to use them
            for your links or not:
          </span>
          <ul className="list-disc list-inside ml-5">
            <li>underlining</li>
            <li>blue text, and</li>
            <li> underlining + blue text.</li>
          </ul>
          Any non-clickable elements that use one of these will look like a
          link, and that would be a misuse of a link signifier
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Strategy #1: Reserve a chosen color for all clickable/tappable
          elements, and avoid using that color for any non-clickable elements.
        </li>
        <hr></hr>
      </ul>
    </div>
  );
}
