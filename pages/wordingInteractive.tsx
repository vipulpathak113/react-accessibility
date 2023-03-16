export default function WordingInteractiveElements() {
  return (
    <div className="m-2">
      <h1 className="text-center text-2xl mt-5 mb-5 bg-black text-white">
        Wording Interactive Elements
      </h1>
      <div>
        Overall, interactive elements should have adequate signifiers to be
        perceived as interactive (clickable, tappable, etc.), and a physical
        presentation that enables us to complete the interaction. This section
        covered how to use wording to make buttons and links more accessible and
        usable.
      </div>

      <div className="text-base font-semibold m-2">
        There are various best practices:
      </div>
      <ul className="list-decimal list-inside">
        <li className="font-bold mr-1">
          Use the term “signifiers” (or alternatively “perceived affordances”)
          instead of the term “affordances”, when talking about the cues
          (visual, auditory, etc.) that hint at an interface element’s intended
          use.
        </li>
        <hr></hr>
        <li>
        <span className="font-bold mr-1">For error message styling:,</span> Indicate errors by adding/changing
          something structural (e.g. add an icon, indent/offset the field) as
          opposed to swapping a current color (e.g. gray field border changes to
          red).
        </li>
        <hr></hr>
        <li>
        <span className="font-bold mr-1">Check for strong signifiers that are:</span> (1) befitting the link/button’s
          destination or the action it triggers, and (2) straightforward and
          obvious enough to be interpreted appropriately by your target
          audience.
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Use action words (for buttons and other action triggers, so that could
          also be links).
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Use task-specific words (for buttons and other action triggers).
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Keep the label wording concise (for buttons and other action
          triggers).
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Avoid ambiguous link wording that’s not unique (such as: read more,
          learn more, continue reading, details, click here). For three reasons:
          Usability, Accessibility, and SEO.
        </li>
        <hr></hr>
        <li className="font-bold mr-1"> 
          Avoid “Click Here” links specifically because, (1) it implies the
          person has a device to click with, (2) it implies the person doesn’t
          know how to complete an action without being told, and (3) it conceals
          the actual action.
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Frontload the most important words (for buttons and other action
          triggers).
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Be transparent about the transport or trigger; the purpose of each
          link/button should be clear from the label text alone (being
          transparent is being sincere; a link is a promise).
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Ensure the link/button text is informative, descriptive, and specific:
          identify the link’s purpose (is it clear when read out of context?).
        </li>
        <hr></hr>
        <li className="font-bold mr-1">
          Instead of using a “read more”-type link/button, hyperlink the title
          of the post (or alternatively, change the “read more”-type link/
          button to be descriptive of the page it links to).
        </li>
        <hr></hr>
      </ul>
    </div>
  );
}
