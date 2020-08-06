import React, {Component} from 'react';
import classes from './App.module.css';
import Counter from './Counter/Counter';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
        <div className={classes.App}>
          <strong>Click on the numbers to increase the counters.
            The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.</strong>
            <p>These two counters are each inside of one common error boundary. So if one crashes, the other is also affected.</p>
            <ErrorBoundary>
                <Counter/>
                <Counter/>
            </ErrorBoundary>
            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
            <ErrorBoundary>
                <Counter/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Counter/>
            </ErrorBoundary>
        </div>
    );
  }
}

export default App;
