export default function About(props: { handleDisplayAbout: () => void }) {
  return (
    <>
      <div id="about">
        <div>
          <button className="standard" onClick={props.handleDisplayAbout}>Close</button>
          <h3>Hey there</h3>
          <p>I'm Talal</p>
        </div>
      </div>
    </>
  );
}
