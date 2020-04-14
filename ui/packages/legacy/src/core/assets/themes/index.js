const FONT_SIZE = '14px'

const COLOR_BRICK_RED = '#d42e4c'
const COLOR_PERSIAN_BLUE = '#2833B3'
const COLOR_COBALT = '#003EA3'
const COLOR_NAVY_BLUE = '#0062ff'
const COLOR_PURPLE_HEART = '#5C37CC'
const COLOR_FREE_SPEECH_BLUE = '#3945D8'
const COLOR_FREE_SPEECH_BLUE_6O = 'rgba(75, 63, 211, 0.6)'
const COLOR_BLUE_GEM = '#3926A8'
const COLOR_BLUE_DOGDER = '#0A84FF'
const COLOR_BLURPLE = '#3945d8'
const COLOR_ROYAL_BLUE = '#505DE9'
const COLOR_SUMMER_SKY = '#3498db'
const COLOR_ISLAMIC_GREEN = '#07bc0c'
const COLOR_MEDIUM_AQUAMARINE = '#53DBA2'
const COLOR_EMERALD = '#5bc879'
const COLOR_CARIBBEAN_GREEN = '#0AC5AB'
const COLOR_MOUNTAIN_MEADOW = '#10AA80'
const COLOR_BLACK = '#000000'
const COLOR_BLACK_RUSSIAN = '#1C1C1E'
const COLOR_BLACK_MARLIN = '#3A3A3C'
const COLOR_BLACK_MARLIN_60 = 'rgba(58, 58, 60, 0.9)'
const COLOR_BLACK_OPACITY = 'rgba(0,0,0,0.1)'
const COLOR_BLACK_SMOKE = 'rgba(6, 6, 6, 0.09)'
const COLOR_BLACK_ALPHA = 'rgba(0, 0, 0, .05)'
const COLOR_NERO = '#252525'
const COLOR_CORK = '#554842'
const COLOR_ZAMBEZI = '#5e5e5e'
const COLOR_ECLIPSE = '#3C3C3C'
const COLOR_PAYNESGREY = '#424251'
const COLOR_PAYNES_GREY = '#48484A'
const COLOR_LICORICE = '#2b3648'
const COLOR_DARK_CERULEAN = '#cad4e4'
const COLOR_LINK_WATER = '#c5c8d3'
const COLOR_HAWKES_BLUE = '#D1D5DF'
const COLOR_LAVENDER = '#EDEBFA'
const COLOR_GAINSBORO = '#dadada'
const COLOR_QUARTZ = '#e2e3eb'
const COLOR_WHITE_SMOKE = '#f5f5f5'
const COLOR_GHOST_WHITE = '#F2F2F7'
const COLOR_GHOST_WHITE_BLUE = '#f6f7fb'
const COLOR_WHITE = '#ffffff'
const COLOR_GREY = 'rgba(209, 213, 223, 0.4)'
const COLOR_GREY_BASTILLE = '#2C2C2E'
const COLOR_GREY_PAYNE = '#48484A'
const COLOR_GREY_COMET = '#636366'
const COLOR_GREY_SUIT = '#8E8E93'
const COLOR_CHAMBRAY = '#4C6072'
const COLOR_JORDY_BLUE = '#57729e'
const COLOR_CINNABAR = '#e74c3c'
const COLOR_RED_ORANGE = '#f23b31'
const COLOR_MOON_YELLOW = '#f1c40f'
const COLOR_GREEN_WATERLOO = 'rgb(39, 40, 34)'
const COLOR_LIGHT_STEEL_BLUE = 'rgba(167,190,227, .8)'
const COLOR_SILVER = '#c1c1c1'
const COLOR_VENETIAN_RED = '#D0021B'
const COLOR_STORM_GREY = '#7A7B91'
const COLOR_GRAY_70 = '#b3b3b3'
const COLOR_CHARCOAL = '#444444'
const COLOR_BLACK_PEARL = '#041A24'
const COLOR_VIRIDIAN = '#439071'

const PRIMARY = COLOR_BLACK_RUSSIAN
const PRIMARY_DARK = COLOR_GREY_BASTILLE
const SECONDARY = COLOR_BLACK_RUSSIAN
const SURFACE = COLOR_GHOST_WHITE

export const COLORS = {
  PRIMARY,
  PRIMARY_DARK,
  SECONDARY,
  SURFACE,
  COLOR_EMERALD,
  COLOR_HAWKES_BLUE,
  COLOR_FREE_SPEECH_BLUE,
  COLOR_FREE_SPEECH_BLUE_6O,
  COLOR_ROYAL_BLUE,
  COLOR_BLUE_GEM,
  COLOR_PURPLE_HEART,
  COLOR_NAVY_BLUE,
  COLOR_COBALT,
  COLOR_BRICK_RED,
  COLOR_MEDIUM_AQUAMARINE,
  COLOR_CARIBBEAN_GREEN,
  COLOR_MOUNTAIN_MEADOW,
  COLOR_CORK,
  COLOR_ECLIPSE,
  COLOR_LAVENDER,
  COLOR_BLACK,
  COLOR_BLACK_RUSSIAN,
  COLOR_BLACK_MARLIN,
  COLOR_BLACK_MARLIN_60,
  COLOR_BLACK_OPACITY,
  COLOR_BLACK_SMOKE,
  COLOR_BLACK_ALPHA,
  COLOR_PAYNES_GREY,
  COLOR_LICORICE,
  COLOR_LINK_WATER,
  COLOR_GAINSBORO,
  COLOR_QUARTZ,
  COLOR_WHITE_SMOKE,
  COLOR_GHOST_WHITE,
  COLOR_GHOST_WHITE_BLUE,
  COLOR_WHITE,
  COLOR_GREY,
  COLOR_GREY_BASTILLE,
  COLOR_GREY_PAYNE,
  COLOR_GREY_COMET,
  COLOR_GREY_SUIT,
  COLOR_BLURPLE,
  COLOR_PERSIAN_BLUE,
  COLOR_CHAMBRAY,
  COLOR_ISLAMIC_GREEN,
  COLOR_CINNABAR,
  COLOR_MOON_YELLOW,
  COLOR_SUMMER_SKY,
  COLOR_PAYNESGREY,
  COLOR_RED_ORANGE,
  COLOR_DARK_CERULEAN,
  COLOR_JORDY_BLUE,
  COLOR_GREEN_WATERLOO,
  COLOR_LIGHT_STEEL_BLUE,
  COLOR_SILVER,
  COLOR_ZAMBEZI,
  COLOR_VENETIAN_RED,
  COLOR_STORM_GREY,
  COLOR_GRAY_70,
  COLOR_CHARCOAL,
  COLOR_NERO,
  COLOR_BLACK_PEARL,
  COLOR_VIRIDIAN,
  COLOR_BLUE_DOGDER,
}

export const Z_INDEX = {
  OVER_0: 0,
  OVER_1: 1,
  OVER_2: 2,
  OVER_3: 3,
  OVER_4: 4,
  OVER_5: 5,
}

export const DEFAULT = {
  PRIMARY,
  PRIMARY_DARK,
  FONT_COLOR: SURFACE,
  FONT_SIZE,
  GRADIENT_START: COLORS.PRIMARY,
  GRADIENT_END: COLORS.SECONDARY,
  BODY_BACKGROUND: PRIMARY,
}

export const SWITCH = {
  ON_COLOR: COLOR_CARIBBEAN_GREEN,
  OFF_COLOR: COLOR_GAINSBORO,
}

export default {
  COLORS,
  DEFAULT,
  Z_INDEX,
  SWITCH,
}
