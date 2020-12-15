# @alferpal/linux-ps4-controller-color

## Caveats
HUGE WARNING: this is highly experimental, have only tried in my computer and needs root for setting the colors.

I take no responsability in what happens if you use this.
## What
Turns out you can change the color of the LED in the back of a PS4 controller by, as it tends to be the case with everything in Linux, just writing values in files.

This CLI does that.

## Why
![](https://i.giphy.com/media/s239QJIh56sRW/giphy.webp)

Got bored one day and decided to write this so I could change the color of the leds in the PS4 handlers I use for playing games on my Linux laptop. 

## Usage

```
Usage: ps4-controller-color <command> [options]

Commands:
  ps4-controller-color list                 Lists controller
  ps4-controller-color random-color         Set a random color for a handler. If
  [handler]                                 not specified, will target the first
                                            handler
  ps4-controller-color random-interval      Set a random color for a handler
  <time> [handler]                          every . If not specified, will
                                            target the first handler
  ps4-controller-color set-color <color>    Set color for a handler. If not
  [handler]                                 specified, will target the first
                                            handler

Options:
      --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]


```
## License

This project is licensed under [Parity](./LICENSE) terms, without offering private licenses for use in closed source.
