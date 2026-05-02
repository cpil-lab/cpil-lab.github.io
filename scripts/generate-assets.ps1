Add-Type -AssemblyName System.Drawing

function New-Canvas {
  param([int]$Width, [int]$Height, [string]$Top = "#f8f5ef", [string]$Bottom = "#d9efed")

  $bitmap = New-Object System.Drawing.Bitmap $Width, $Height
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $rect = New-Object System.Drawing.Rectangle 0, 0, $Width, $Height
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, ([System.Drawing.ColorTranslator]::FromHtml($Top)), ([System.Drawing.ColorTranslator]::FromHtml($Bottom)), 35
  $graphics.FillRectangle($brush, $rect)
  $brush.Dispose()
  return @($bitmap, $graphics)
}

function Save-Png {
  param($Bitmap, $Graphics, [string]$Path)

  $dir = Split-Path -Parent $Path
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force $dir | Out-Null
  }
  $Graphics.Dispose()
  $Bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $Bitmap.Dispose()
}

function Add-Network {
  param($Graphics, [int]$Width, [int]$Height, [int]$Seed = 4, [int]$Nodes = 22)

  $random = New-Object System.Random $Seed
  $points = @()
  for ($i = 0; $i -lt $Nodes; $i++) {
    $points += [PSCustomObject]@{
      X = [int]($random.NextDouble() * ($Width * 0.84) + ($Width * 0.08))
      Y = [int]($random.NextDouble() * ($Height * 0.72) + ($Height * 0.12))
      R = $random.Next(5, 14)
    }
  }

  $linePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(90, 20, 116, 123)), 2
  for ($i = 0; $i -lt $points.Count; $i++) {
    for ($j = $i + 1; $j -lt $points.Count; $j++) {
      $dx = $points[$i].X - $points[$j].X
      $dy = $points[$i].Y - $points[$j].Y
      $distance = [Math]::Sqrt(($dx * $dx) + ($dy * $dy))
      if ($distance -lt ($Width / 4.8)) {
        $Graphics.DrawLine($linePen, $points[$i].X, $points[$i].Y, $points[$j].X, $points[$j].Y)
      }
    }
  }
  $linePen.Dispose()

  $fills = @(
    [System.Drawing.Color]::FromArgb(240, 11, 92, 99),
    [System.Drawing.Color]::FromArgb(238, 186, 122, 41),
    [System.Drawing.Color]::FromArgb(238, 72, 139, 128)
  )
  foreach ($point in $points) {
    $fill = New-Object System.Drawing.SolidBrush $fills[$random.Next(0, $fills.Count)]
    $Graphics.FillEllipse($fill, $point.X - $point.R, $point.Y - $point.R, $point.R * 2, $point.R * 2)
    $fill.Dispose()
  }
}

function Add-Grid {
  param($Graphics, [int]$Width, [int]$Height)

  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(42, 29, 33, 35)), 1
  for ($x = 0; $x -le $Width; $x += 64) {
    $Graphics.DrawLine($pen, $x, 0, $x, $Height)
  }
  for ($y = 0; $y -le $Height; $y += 64) {
    $Graphics.DrawLine($pen, 0, $y, $Width, $y)
  }
  $pen.Dispose()
}

function Add-ProjectMotif {
  param($Graphics, [int]$Width, [int]$Height, [int]$Seed)

  Add-Grid $Graphics $Width $Height
  Add-Network $Graphics $Width $Height $Seed 18
  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(150, 231, 174, 86)), 5
  $Graphics.DrawArc($pen, [int]($Width * 0.13), [int]($Height * 0.15), [int]($Width * 0.74), [int]($Height * 0.7), 205, 245)
  $pen.Dispose()
}

function Add-LogoText {
  param($Graphics, [string]$Text, [int]$Width, [int]$Height)

  $font = New-Object System.Drawing.Font "Segoe UI", ([int]($Height * 0.21)), ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
  $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(245, 241, 244, 241))
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF 0, 0, $Width, $Height
  $Graphics.DrawString($Text, $font, $brush, $rect, $format)
  $format.Dispose()
  $brush.Dispose()
  $font.Dispose()
}

$assets = @(
  @{ Path = "public/images/brand/cpil-hero.png"; Width = 1400; Height = 1050; Top = "#fbf7ef"; Bottom = "#cfe9e6"; Seed = 9; Type = "hero" },
  @{ Path = "public/images/brand/og-image.png"; Width = 1200; Height = 630; Top = "#123438"; Bottom = "#dcefeb"; Seed = 7; Type = "og" },
  @{ Path = "public/images/projects/test-project-alpha.png"; Width = 1200; Height = 750; Top = "#f5f0e5"; Bottom = "#d9efed"; Seed = 2; Type = "project" },
  @{ Path = "public/images/projects/test-project-beta.png"; Width = 1200; Height = 750; Top = "#eef7f5"; Bottom = "#e9dfc9"; Seed = 5; Type = "project" },
  @{ Path = "public/images/projects/test-project-gamma.png"; Width = 1200; Height = 750; Top = "#f2f4f0"; Bottom = "#cce3e7"; Seed = 8; Type = "project" },
  @{ Path = "public/images/projects/test-project-delta.png"; Width = 1200; Height = 750; Top = "#f7f2e9"; Bottom = "#d2eadf"; Seed = 11; Type = "project" },
  @{ Path = "public/images/projects/placeholder.png"; Width = 1200; Height = 750; Top = "#f8f5ef"; Bottom = "#d8e8e6"; Seed = 13; Type = "project" },
  @{ Path = "public/images/news/website-launch.png"; Width = 1200; Height = 675; Top = "#f8f5ef"; Bottom = "#cfe9e6"; Seed = 17; Type = "project" },
  @{ Path = "public/images/news/open-positions.png"; Width = 1200; Height = 675; Top = "#f7f1e8"; Bottom = "#d4ece6"; Seed = 19; Type = "project" },
  @{ Path = "public/images/news/project-briefs.png"; Width = 1200; Height = 675; Top = "#f0f7f6"; Bottom = "#e6dcc8"; Seed = 23; Type = "project" },
  @{ Path = "public/images/news/editorial-workflow.png"; Width = 1200; Height = 675; Top = "#f5f7ef"; Bottom = "#cfdfe5"; Seed = 29; Type = "project" }
)

foreach ($asset in $assets) {
  $canvas = New-Canvas $asset.Width $asset.Height $asset.Top $asset.Bottom
  $bitmap = $canvas[0]
  $graphics = $canvas[1]
  if ($asset.Type -eq "hero" -or $asset.Type -eq "og") {
    Add-Grid $graphics $asset.Width $asset.Height
    Add-Network $graphics $asset.Width $asset.Height $asset.Seed 32
  } else {
    Add-ProjectMotif $graphics $asset.Width $asset.Height $asset.Seed
  }
  Save-Png $bitmap $graphics $asset.Path
}

$canvas = New-Canvas 800 800 "#0b5c63" "#14747b"
$bitmap = $canvas[0]
$graphics = $canvas[1]
Add-Network $graphics 800 800 31 16
Add-LogoText $graphics "CPIL" 800 800
Save-Png $bitmap $graphics "public/images/brand/cpil-admin-logo.png"

$canvas = New-Canvas 900 675 "#e8f3ef" "#d9d0bf"
$bitmap = $canvas[0]
$graphics = $canvas[1]
Add-Network $graphics 900 675 41 12
$portraitBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(245, 11, 92, 99))
$graphics.FillEllipse($portraitBrush, 330, 120, 240, 240)
$graphics.FillRectangle($portraitBrush, 260, 390, 380, 220)
$portraitBrush.Dispose()
Save-Png $bitmap $graphics "public/images/people/placeholder.png"

$canvas = New-Canvas 900 675 "#eef7f4" "#d9e4dd"
$bitmap = $canvas[0]
$graphics = $canvas[1]
Add-Network $graphics 900 675 43 14
$portraitBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(245, 20, 116, 123))
$graphics.FillEllipse($portraitBrush, 330, 120, 240, 240)
$graphics.FillRectangle($portraitBrush, 260, 390, 380, 220)
$portraitBrush.Dispose()
Add-LogoText $graphics "XL" 900 325
Save-Png $bitmap $graphics "public/images/people/xue-steve-liu.png"
