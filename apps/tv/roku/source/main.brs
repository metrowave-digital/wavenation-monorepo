sub Main()
    screen = CreateObject("roVideoScreen")
    screen.SetContentList([{
        title: "WaveNation Live Stream",
        streamFormat: "mp4",
        url: "https://stream.wavenation.plus/live/stream.m3u8"
    }])
    screen.Show()
end sub
