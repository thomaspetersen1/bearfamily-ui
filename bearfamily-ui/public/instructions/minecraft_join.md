# Joining the Minecraft Server

Our Minecraft server is modded (Fabric), and it runs on the family network instead of the
public internet. So there are two things to set up the first time: get your PC on the network
with Tailscale, then install the mod pack. After that you just launch and play.

You'll need a PC and a paid Minecraft: Java Edition account.

There are two ways to install the mods in Part 2. Pick one:

- **Modrinth App** is the easiest and works for most people.
- **Prism Launcher** takes a little more setup, but then it updates the mods for you every time you launch.

---

## Part 1: Get on the network (Tailscale)

Tailscale is a free app that puts your PC on our private family network so it can see the
Minecraft server. Nothing is open to the public internet.

1. Ask Thomas for an invite. He'll email you an invite to the family network. Accept it and
   sign in. You can install the app first, but you
   have to be invited before it will connect.
2. Download Tailscale for Windows: <https://tailscale.com/download/windows>
3. Run the installer, then sign in with the same account you used to accept the invite.
4. Once it says Connected, test it. Open a browser and go to http://panda-homelab:8090/. If
   you see a list of files, you're on the network and ready for Part 2.

If `panda-homelab` doesn't work anywhere in this guide, ask Thomas for the network IP (it
looks like `100.x.x.x`) and use that instead of the name.

---

## Part 2A: Mods the easy way (Modrinth App)

1. Download and install the Modrinth App from <https://modrinth.com/app>.
2. Open it and sign in with your Microsoft / Minecraft account.
3. With Tailscale connected, go to http://panda-homelab:8090/bearfamily.mrpack in your browser
   and save the file.
4. In the Modrinth App, click the plus button in the left sidebar, Install modpack, and pick
   the `bearfamily.mrpack` you just downloaded.
5. It installs Fabric and all the mods for you. When it finishes, press Play.
6. Go to Part 3 to connect.

When Thomas changes the mod list, download `bearfamily.mrpack` again (step 3) and import it
again (step 4). That's how you stay up to date with this method.

---

## Part 2B: Mods that update themselves (Prism Launcher)

This takes a few more minutes, but then your mods stay current on their own.

1. Install Prism Launcher from <https://prismlauncher.org/download/> and sign in with your
   Minecraft account (the Accounts button, top right).
2. Click Add Instance, pick Minecraft 26.2, set the mod loader to Fabric, give it a name, and
   click OK. This makes an empty Fabric instance.
3. Download `packwiz-installer-bootstrap.jar` from
   <https://github.com/packwiz/packwiz-installer-bootstrap/releases>. It's the small `.jar`
   file at the bottom of the latest release.
4. Right-click the instance and click Folder, open the `.minecraft` subfolder, and drop that
   `.jar` file in there.
5. Right-click the instance, click Edit, go to Settings, then Custom commands. Tick the Custom
   commands box, and in the Pre-launch command box paste this exactly:
   ```
   "$INST_JAVA" -jar "$INST_MC_DIR/packwiz-installer-bootstrap.jar" http://panda-homelab:8090/pack.toml
   ```
6. Launch the instance. Every time you launch, it grabs the latest mods before the game
   starts, so you never have to update them by hand. Then go to Part 3.

Make sure the instance is Fabric on version 26.2. Prism only installs the mods; the loader you
picked in step 2 is what runs them.

---

## Part 3: Connect and talk

1. Click Play to get to the Minecraft title screen.
2. Click Multiplayer, then Add Server:
   - Server Name: `Tommy's Server`
   - Server Address: `panda-homelab:25565`
3. Save it, then double-click it to join.

For voice chat (Simple Voice Chat): it turns on by itself once you're in the world. Windows
will probably ask for microphone permission the first time, so allow it. Press V in the game
to open the voice settings and pick your microphone. It's proximity voice, so you hear people
who are close to you and they get quieter as they walk away.

Anyone who skipped the voice mod can still play. They just won't hear or be heard.

---

## If something isn't working

- **The browser can't reach http://panda-homelab:8090/.** Tailscale probably isn't connected,
  or your invite hasn't come through yet. Check Part 1 and ask Thomas to confirm the invite.
- **The server won't show up, or you get "connection refused".** Usually that means you're not
  connected to Tailscale, or the pack hasn't finished installing. Make sure Tailscale says Connected.
- **You get "incompatible" or mod version errors.** Your mods are out of date. In the Modrinth
  App, re-import the pack (Part 2A). In Prism, just launch again and it updates.
- **Still stuck?** Ask Thomas, happy to help.
