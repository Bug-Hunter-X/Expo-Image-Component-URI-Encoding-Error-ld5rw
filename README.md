# Expo Image Component URI Encoding Error

This repository demonstrates a bug in the Expo `Image` component where images with URIs containing special characters fail to load. The error is often silent, making debugging challenging.

## Bug Description

The Expo `Image` component does not correctly handle URIs containing spaces or accented characters.  When such a URI is provided, the image fails to load without a clear error message. This makes it difficult to diagnose and resolve the issue.

## Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go.
4. Observe that the image with special characters in its URI fails to load.

## Solution

The solution involves correctly encoding the URI before passing it to the `Image` component using `encodeURIComponent`. This ensures that special characters are properly handled by the component.

## Additional Notes

This issue is likely related to how the `Image` component interacts with the underlying native modules. The inconsistent error messaging makes debugging challenging and highlights the need for better error handling in the Expo library.