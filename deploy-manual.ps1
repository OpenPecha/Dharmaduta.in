# Manual deployment to GitHub Pages
Write-Host "Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan

# Save current branch
$currentBranch = git branch --show-current

# Create orphan branch with dist contents
git checkout --orphan gh-pages
git reset --hard
git clean -fd

# Copy dist contents to root
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Add all files
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to gh-pages branch
git push origin gh-pages --force

# Switch back to original branch
git checkout $currentBranch

Write-Host "Deployment complete!" -ForegroundColor Green
