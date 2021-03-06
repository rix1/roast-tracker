// @flow

declare type App$ColorTypes = 'dusty' | 'blue' | 'warm' | 'peach' | 'orange';

declare type App$ThemeType = {
  sizes: { lineWidth: string },
  colors: {
    [App$ColorTypes]: string,
  },
};
