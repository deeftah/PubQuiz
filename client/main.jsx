import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './main.html';
import 'routes.jsx';

import {test} from '../db/main.js';

// Router.onBeforeAction(animateContentOut);

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});
