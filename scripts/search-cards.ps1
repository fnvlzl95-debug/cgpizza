param()

$projectRoot = Split-Path -Parent $PSScriptRoot
$assetRoot = Join-Path $projectRoot "public/assets/user"
$outputRoot = Join-Path $assetRoot "og"
$ffmpegCommand = Get-Command ffmpeg.exe -ErrorAction Stop

New-Item -ItemType Directory -Force -Path $outputRoot | Out-Null

function Invoke-CardRender {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments,

    [Parameter(Mandatory = $true)]
    [string]$OutputPath
  )

  & $ffmpegCommand.Source @Arguments $OutputPath
  if ($LASTEXITCODE -ne 0) {
    throw "ffmpeg failed while rendering $OutputPath"
  }
}

$homeOutput = Join-Path $outputRoot "search-home.jpg"
$homeFilter = @"
[0:v]format=rgba,
drawbox=x=0:y=0:w=500:h=630:color=0x991308:t=fill,
drawbox=x=500:y=0:w=700:h=630:color=0xD12514:t=fill[home-bg];
[1:v]scale=760:760:force_original_aspect_ratio=decrease,format=rgba[home-pizza];
[2:v]scale=245:-1,format=rgba[home-farro];
[3:v]scale=310:-1,format=rgba[home-logo];
[home-bg][home-pizza]overlay=x=475:y=-62:format=auto[home-with-pizza];
[home-with-pizza][home-farro]overlay=x=35:y=340:format=auto[home-with-farro];
[home-with-farro][home-logo]overlay=x=52:y=68:format=auto,
format=yuvj420p[home-final]
"@ -replace "`r?`n", ""

Invoke-CardRender -Arguments @(
  "-hide_banner", "-loglevel", "error", "-y",
  "-f", "lavfi", "-i", "color=c=0xB4170A:s=1200x630:d=1",
  "-i", (Join-Path $assetRoot "hero-pizza-oriented.webp"),
  "-i", (Join-Path $assetRoot "brand/farro-ears-20260819.webp"),
  "-i", (Join-Path $assetRoot "brand/wordmark-white-20260822.webp"),
  "-filter_complex", $homeFilter,
  "-map", "[home-final]", "-frames:v", "1", "-q:v", "3"
) -OutputPath $homeOutput

$menuOutput = Join-Path $outputRoot "search-menu.jpg"
$menuFilter = @"
[0:v]format=rgba[menu-bg];
[1:v]scale=810:540:force_original_aspect_ratio=increase,
crop=394:540:(iw-394)/2:0,format=rgba[menu-one];
[2:v]scale=810:540:force_original_aspect_ratio=increase,
crop=394:540:(iw-394)/2:0,format=rgba[menu-two];
[3:v]scale=810:540:force_original_aspect_ratio=increase,
crop=394:540:(iw-394)/2:0,format=rgba[menu-three];
[4:v]scale=255:-1,format=rgba[menu-logo];
[menu-bg][menu-one]overlay=x=0:y=0:format=auto[menu-a];
[menu-a][menu-two]overlay=x=403:y=0:format=auto[menu-b];
[menu-b][menu-three]overlay=x=806:y=0:format=auto[menu-c];
[menu-c]drawbox=x=0:y=510:w=1200:h=120:color=0xB4170A@0.94:t=fill[menu-bar];
[menu-bar][menu-logo]overlay=x=42:y=518:format=auto,
format=yuvj420p[menu-final]
"@ -replace "`r?`n", ""

Invoke-CardRender -Arguments @(
  "-hide_banner", "-loglevel", "error", "-y",
  "-f", "lavfi", "-i", "color=c=0xB4170A:s=1200x630:d=1",
  "-i", (Join-Path $assetRoot "menu/choigang-master-pizza.png"),
  "-i", (Join-Path $assetRoot "menu/choigang-charcoal-galbi-pizza.png"),
  "-i", (Join-Path $assetRoot "menu/choigang-whole-shrimp-pizza.png"),
  "-i", (Join-Path $assetRoot "brand/wordmark-white-20260822.webp"),
  "-filter_complex", $menuFilter,
  "-map", "[menu-final]", "-frames:v", "1", "-q:v", "3"
) -OutputPath $menuOutput

$brandOutput = Join-Path $outputRoot "search-brand.jpg"
$brandFilter = @"
[0:v]format=rgba[brand-bg];
[1:v]scale=400:-1,crop=400:630:0:(ih-630)/2,format=rgba[brand-one];
[2:v]scale=400:-1,crop=400:630:0:(ih-630)/2,format=rgba[brand-two];
[3:v]scale=400:-1,crop=400:630:0:(ih-630)/2,format=rgba[brand-three];
[4:v]scale=255:-1,format=rgba[brand-logo];
[5:v]scale=110:-1,format=rgba[brand-farro];
[brand-bg][brand-one]overlay=x=0:y=0:format=auto[brand-a];
[brand-a][brand-two]overlay=x=400:y=0:format=auto[brand-b];
[brand-b][brand-three]overlay=x=800:y=0:format=auto[brand-c];
[brand-c]drawbox=x=0:y=510:w=1200:h=120:color=0xB4170A@0.92:t=fill[brand-bar];
[brand-bar][brand-logo]overlay=x=42:y=518:format=auto[brand-with-logo];
[brand-with-logo][brand-farro]overlay=x=1045:y=510:format=auto,
format=yuvj420p[brand-final]
"@ -replace "`r?`n", ""

Invoke-CardRender -Arguments @(
  "-hide_banner", "-loglevel", "error", "-y",
  "-f", "lavfi", "-i", "color=c=0xB4170A:s=1200x630:d=1",
  "-i", (Join-Path $assetRoot "brand-videos/posters/1.webp"),
  "-i", (Join-Path $assetRoot "brand-videos/posters/2-revised.webp"),
  "-i", (Join-Path $assetRoot "brand-videos/posters/3.webp"),
  "-i", (Join-Path $assetRoot "brand/wordmark-white-20260822.webp"),
  "-i", (Join-Path $assetRoot "brand/farro-ears-20260819.webp"),
  "-filter_complex", $brandFilter,
  "-map", "[brand-final]", "-frames:v", "1", "-q:v", "3"
) -OutputPath $brandOutput

Get-Item $homeOutput, $menuOutput, $brandOutput |
  Select-Object Name, Length, FullName
