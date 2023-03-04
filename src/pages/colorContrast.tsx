const colorContrast = () => {
  return (
    <>
      <h1>Color Contrast Requirement</h1>
      <h3>
        <summary>
          Ensure there is adequate contrast between the color of every single
          information-bearing element and its background.
        </summary>
      </h3>
      Here are some best practices:
      <ul>
        <li>
          Determine which UI elements need which levels of color contrast by
          categorizing them into two groups: (1) information-bearing elements,
          and (2) decorative and disabled elements.
        </li>
        <hr></hr>
        <li>
          Exceed (or meet) the minimum color contrast requirements.
          <ul>
            <li>
              <strong>For Decorative and Disabled Elements:</strong> there is no
              color contrast requirement.
            </li>
            <li>
              <strong>For Information-Bearing Elements:</strong> at least 4.5:1.
              An exception is made for some elements, and for these the minimum
              drops to 3:1. They include:
              <ul>
                <li>
                  <strong> Large Text (or images of text):</strong> 14pt bold+
                  or 18pt reg+
                </li>
                <li>
                  {" "}
                  <strong>UI Controls:</strong> any visual information provided
                  that is{" "}
                </li>
                necessary for a user to identify that a control is present and
                how to operate it. This includes (1) Non-text indicators such as
                the check in a checkbox, or an arrow icon indicating a dropdown
                menu, and (2) the control’s various states (selected, focused,
                etc.), except for the disabled state.
                <li>
                  {" "}
                  <strong>Graphical Objects:</strong> parts of graphics required
                  to understand the content.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <hr></hr>
        <li>
          <div>
            Avoid problematic color combinations, such as:
            <ul>
              <li>Red & Green (the biggest one to avoid)</li>
              <li>Green & Brown</li>
              <li>Green & Blue</li>
              <li>Green & Gray</li>
              <li>Green & Black</li>
              <li>Blue & Gray</li>
              <li>Blue & Purple</li>
            </ul>
          </div>
          <div>
            Or, if your design truly calls for using problematic colors next to
            each other, really make sure there is a high contrast ratio between
            the two. Darken one color and lighten the other to make the contrast
            more pronounced, or play with the saturation, or slide the hues a
            little one way or another.
          </div>
        </li>
        <hr></hr>
        <li>
          Check the contrast of your colors as you are designing, not once
          you’re all done.
          <ul>
            <li>
              Manually checking the colors as you’re picking them out will train
              your eye to recognize which colors pass and which don’t, just by
              looking at a UI design.
            </li>
            <li>
              And when you’re in the habit of checking each new color you pick
              out, you’re less likely to miss checking a color.
            </li>
          </ul>
        </li>
        
      </ul>
    </>
  );
};

export default colorContrast;
