$novelDir = Join-Path $PSScriptRoot 'novel'
$files = Get-ChildItem -Path $novelDir -Filter '*.txt'

function Escape-Html {
    param([string]$s)
    if ($null -eq $s) { return '' }
    return $s -replace '&', '&amp;' -replace '<', '&lt;' -replace '>', '&gt;'
}

$count = 0
foreach ($file in $files) {
    $txt = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $lines = $txt -split '\r?\n'
    $idx = 0
    while ($idx -lt $lines.Length -and $lines[$idx].Trim() -eq '') { $idx++ }
    if ($idx -lt $lines.Length) {
        $title = $lines[$idx].Trim()
        if ($idx + 1 -lt $lines.Length) {
            $contentLines = $lines[($idx + 1)..($lines.Length - 1)]
        } else {
            $contentLines = @()
        }
    } else {
        $title = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
        $contentLines = @()
    }
    
    $bodyParts = @()
    foreach ($line in $contentLines) {
        $trimmed = $line.Trim()
        if ($trimmed -eq '') { continue }
        if ($trimmed -match '^「.*」$') {
            $bodyParts += '<p class="scene-title">' + (Escape-Html $trimmed) + '</p>'
        } else {
            $bodyParts += '<p>' + (Escape-Html $trimmed) + '</p>'
        }
    }
    
    $bodyContent = $bodyParts -join "`n    "
    $title_escaped = Escape-Html $title
    
    $html = '<!DOCTYPE html>' + "`n"
    $html += '<html lang="ja">' + "`n"
    $html += '<head>' + "`n"
    $html += '<meta charset="UTF-8">' + "`n"
    $html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">' + "`n"
    $html += '<title>' + $title_escaped + '</title>' + "`n"
    $html += '<link rel="stylesheet" href="../style.css">' + "`n"
    $html += '</head>' + "`n"
    $html += '<body>' + "`n"
    $html += '<div class="card">' + "`n"
    $html += '  <h1>' + $title_escaped + '</h1>' + "`n"
    $html += '  <div class="story">' + "`n"
    $html += '    ' + $bodyContent + "`n"
    $html += '  </div>' + "`n"
    $html += '  <div class="footer">' + "`n"
    $html += '    <a href="../index.html">ぽんちょの雨宿り</a>' + "`n"
    $html += '  </div>' + "`n"
    $html += '</div>' + "`n"
    $html += '</body>' + "`n"
    $html += '</html>'
    
    $outPath = Join-Path $file.DirectoryName ([System.IO.Path]::ChangeExtension($file.Name, '.html'))
    $html | Out-File -FilePath $outPath -Encoding utf8 -NoNewline
    $count++
}

Write-Host "generated $count html files"
