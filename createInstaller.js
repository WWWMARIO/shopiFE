const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

async function getInstallerConfig () {
  console.log('creating windows installer')
 /*  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'Electron-tutorial-app-win32-ia32/'),
    authors: 'Martio',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'electron-tutorial-app.exe',
    setupExe: 'ElectronTutorialAppInstaller.exe',
    // setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
  }) */
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: '/out/shopiFE-win32-x64',
      outputDirectory: '/tmp/build/installer64',
      authors: 'My App Inc.',
      exe: 'myapp.exe'
    });
    console.log('It worked!');
  } catch (e) {
    console.log(`No dice: ${e.message}`);
  }
}

// out\shopiFE-win32-x64
