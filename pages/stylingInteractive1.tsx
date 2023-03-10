export default function StylingInteracting1() {
  return (
    <div className="m-2">
      <h1 className="text-center text-2xl mt-5 mb-5 bg-black text-white">
        Styling Interactive Elements (Part1: Buttons and Like)
      </h1>
      <div>
        People should be able to consistently tell what’s actionable, simply by
        looking at the interface, without having to sweep the screen with their
        mouse to discover what’s interactive* (the more effort a UI requires,
        the less use it will get).
      </div>

      <div className="text-base font-semibold m-2">
        There are various best practices:
      </div>
      <ul className="list-decimal list-inside">
        <li>
          <span className="font-bold mr-1">The Shape Technique: </span>
          <span className="text-green-700 font-bold mr-1">
            Shape can indicate to us whether something is a button or not.
          </span>
          Rectangles are the safest choice, but other shapes can work too —
          particularly when coupled with strong signifiers of clickability.
        </li>
        <li>
          <span className="font-bold mr-1">The Border Radius Technique: </span>
          <span className="text-green-700 font-bold mr-1">
            A button’s border radius can change-up its “personality”.
          </span>
          From no border radius being more serious to fully-rounded corners
          being more playful — choose a “personality” that matches the vibe of
          the brand/digital product.
        </li>
        <li>
          <span className="font-bold mr-1">
            The Fill (and Color) Technique:
          </span>
          <span className="text-green-700 font-bold mr-1">
            To convey differences / hierarchy, we use structural changes.
          </span>
          When it comes time to stylistically differentiate buttons to visually
          convey their position in the hierarchy, we do not rely on just
          different colors to communicate those differences. Instead, we use
          structural things like fills (e.g. solid vs. hollow-fill), strokes
          (e.g. outline vs. no outline), and sizes (e.g. micro to jumbo).
          <div className="font-bold">An example:</div>
          <ul className="list-disc list-inside ml-5">
            <li>Primary actions are solid fill buttons.</li>
            <li>Secondary actions are line buttons.</li>
            <li>Tertiary actions are borderless buttons.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold mr-1">
            The Shadow (and Elevation) Technique:
          </span>
          <span className="text-green-700 font-bold mr-1">
            Shadows convey elevation.
          </span>
          Therefore they are another technique we can use to signify that
          something can be interacted with. Whether that’s a button, card,
          panel, accordion bar, or anything that needs to show that it’s
          elevated from the page background or stacked over something.
        </li>
        <li>
          <span className="font-bold mr-1">The Competition Technique: </span>
          <span className="text-green-700 font-bold mr-1">
            Similar-styled elements become competition.
          </span>
          We want our CTAs (Calls To Action) to stand out clear as day. But it’s
          difficult to visually pick out clickable elements when similar-looking
          elements compete with them.
          <ul className="list-disc list-inside ml-5">
            <li>
              <span className="font-bold mr-1">
                Restyle or remove anything that’s visually competing with CTAs
              </span>
              (like form elements, a busy background image, rectangle shapes
              nearby, or even other buttons).
            </li>
            <li className="font-bold">
              Aim to have only one primary button per page or distinct area.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold mr-1">The Proximity Technique: </span>
          When UI elements are in too close of proximity they can suffocate each
          other, none will stand out, and interactive elements will be difficult
          to interact with.
          <ul className="list-disc list-inside ml-5">
            <li>
              <span className="text-green-700 font-bold mr-1">
                Breathability:
              </span>
              <span className="font-bold mr-1">
                Use lots of white space, perhaps more than you would normally be
                inclined to.
              </span>
              This allows our interactive elements to stand out, gives them
              breathing room, and provides them enough space between each other
              so people don’t select a neighboring interactive element on
              accident.
            </li>
            <li>
              <span className="text-green-700 font-bold mr-1">Relation:</span>
              <span className="font-bold mr-1">Group related items.</span>
              This way their relation is clear. Just not too close, because even
              within families there needs to be breathing room between everyone.
            </li>
            <li>
              <span className="text-green-700 font-bold mr-1">
                Touch targets:
              </span>
              <span className="font-bold mr-1">
                Make touch targets large enough to be easily selectable.
              </span>
              Each touch target needs to be big enough for anyone to easily
              select it and not accidentally select neighboring interactive
              elements.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold mr-1">
            Label Capitalization Technique:
          </span>
          <span className="text-green-700 font-bold mr-1">
            The type of capitalization used for labels can convey different
            tones of voice.
          </span>
          Sentence case is the safest choice because it’s friendly,
          conversational, and the easiest to read, but when in doubt test it out
          with users (real or representative).
        </li>
        <li>
          <span className="font-bold mr-1">
            Reserve Button Signifiers for Buttons Only:{" "}
          </span>
          Whichever combination of signifiers you decide to use for your
          buttons, links, and other interactive elements, just remember:
          <span className="text-green-700 font-bold mr-1">
            reserve that combo of signifiers for those interactive elements.
            Non-interactive elements should not get to use them.
          </span>
          Also avoid using classic, well-known button signifiers (e.g. rectangle
          shapes) for non-clickable elements even if you’re not using them in
          your designs.
        </li>
        <li>
          <span className="font-bold mr-1">
            Consistency, Similarity, and Distinctness:{" "}
          </span>
          Aim for consistency, but do so while keeping the users in mind, not
          the other pages of the product (or another product).
          <span className="text-green-700 font-bold mr-1">
            If you need to sacrifice consistency to aid clarity or usability,
            then do so.
          </span>
        </li>
      </ul>
    </div>
  );
}
