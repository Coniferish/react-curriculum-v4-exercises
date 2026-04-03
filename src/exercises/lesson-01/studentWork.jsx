//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'John';
  // eslint-disable-next-line
  const age = '33';
  const hobbies = ['drawing', 'dancing', 'exercising'];
  return (
    <div>
      {/* add JSX here */}
      {/* <p> Student output will go here </p> */}
      <h1>About John</h1>
      <p>
        Hi! I'm {name}. This is my first CTD course. I've been working primarily
        as a Python developer, though, for the past 3+ years and am looking
        forward to doing more frontend work. Below are a few of my hobbies.
      </p>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
