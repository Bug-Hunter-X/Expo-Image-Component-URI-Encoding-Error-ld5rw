This solution correctly encodes the URI using `encodeURIComponent` before passing it to the `Image` component, resolving the issue.

```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUri = 'https://example.com/image with spaces.jpg'; // URI with special character
  const encodedUri = encodeURIComponent(imageUri);

  return (
    <Image source={{ uri: encodedUri }} style={{ width: 200, height: 200 }} />
  );
};

export default MyComponent;
```