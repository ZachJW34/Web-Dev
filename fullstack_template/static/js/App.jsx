// App.jsx
import React from "react";
import Hello from "./Hello";
import PageHeader from "react-bootstrap/lib/PageHeader";

class App extends React.Component {
  render () {
	return (
		<PageHeader>
		  <div className='header-contents'>
		    <Hello name='Rimini' />
		  </div>
		</PageHeader>
		);
	}
}

export default App;