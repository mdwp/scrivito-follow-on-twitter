import * as React from 'react';
import * as Scrivito from 'scrivito';
import { TwitterFollowButton } from 'react-twitter-embed';



Scrivito.provideComponent('TwitterFollowWidget', ({ widget }) => {
  const twitter = widget.get('twitter');

  if (!twitter.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide the twitter name in the widget properties.
        </h4>
    );
  }

  return (
    <TwitterFollowButton
    screenName={twitter}
    />
  );
});

