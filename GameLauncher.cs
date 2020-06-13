using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Beacon
{
    public partial class GameLauncher : Form
    {
        public GameLauncher(string game)
        {
            InitializeComponent();
            InitializeLaunchOptions(game);
            imgGame.BackgroundImage = Beacon.Main.headerDictionary[game];
        }

        public void InitializeLaunchOptions(string game)
        {
            /*
            JObject launchoptions = JObject.Parse(File.ReadAllText(@"C:\Users\lgast\OneDrive\Documents\GitHub\Beacon\resources\json\gamelaunch\counterstrikesource.json"));
            JObject launchoptions = JObject.Parse(Properties.Resources.ResourceManager.GetString(game));
            JArray matchArray = (JArray)launchoptions["launchoptions"][0]["matchmakingregions"];
            Array gamemodesArray = (JArray) launchoptions["launchoptions"][0]["gamemodes"];
            _gameModes = launchoptions.SelectToken("launchoptions[0].gamemodes").ToObject<string[]>();
            if (launchoptions.SelectToken("launchoptions[0].gamemaps0") != null)
            {
                _gameMaps0 = launchoptions.SelectToken("launchoptions[0].gamemaps0").ToObject<string[]>();
            }
            if (launchoptions.SelectToken("launchoptions[0].gamemaps1") != null)
            {
                _gameMaps1 = launchoptions.SelectToken("launchoptions[0].gamemaps1").ToObject<string[]>();
            }
            string[] matchMakingRegions = matchArray.Select(c => (string) c).ToArray();
            string[] gameModes = gamemodesArray.Select(c => (string) c).ToArray();
            comboBoxMatchRegion.Items.AddRange(matchMakingRegions); 
            checkedListGameModes.Items.AddRange(_gameModes);
            */
            JObject jsonLaunchOptions = JObject.Parse(Properties.Resources.ResourceManager.GetString(game));
            string[] matchMakingRegions = jsonLaunchOptions.SelectToken("launchoptions[0].matchmakingregions").ToObject<string[]>();
            string[] gameModes = jsonLaunchOptions.SelectToken("launchoptions[0].gamemodes").ToObject<string[]>();
            string[] connections = jsonLaunchOptions.SelectToken("launchoptions[0].connections").ToObject<string[]>();
            comboBoxMatchRegion.Items.AddRange(matchMakingRegions);
            checkedListGameModes.Items.AddRange(gameModes);
            checkedListConnections.Items.AddRange(connections);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            
        }

        private void comboBoxMatchRegion_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click_1(object sender, EventArgs e)
        {

        }

        private void checkedListGameModes_SelectedIndexChanged(object sender, EventArgs e)
        {
            
        }

        private void checkedListConnections_SelectedIndexChanged(object sender, EventArgs e)
        {
            
        }

        private void labelMaps_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click_1(object sender, EventArgs e)
        {

        }

        private void quesion_MouseHover(object sender, EventArgs e)
        {
            toolTipConnections.Show("If you would like to connect to certain maps, worlds, or other specific locations, then select them here." +
                                    "\nBy default, all maps in a gamemode are searched", quesion);
        }
    }

    public class StartButton : Button
    {

    }
}
