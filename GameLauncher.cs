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
        private string[] _gameModes;
        private string[] _gameMaps0;
        private string[] _gameMaps1;
        private string[] _gameMaps2;
        private string[] _gameMaps3;
        private string[] _gameMaps4;
        public GameLauncher(string game)
        {
            InitializeComponent();
            InitializeLaunchOptions(game);
            imgGame.BackgroundImage = Beacon.Main.headerDictionary[game];
            while (this.Created)
            {
                if (checkedListGameModes.GetItemCheckState(0) == CheckState.Checked)
                {
                    checkedListMaps.Items.AddRange(_gameMaps0);
                }
                else if (checkedListGameModes.GetItemCheckState(0) == CheckState.Unchecked)
                {
                    foreach (var gameMap in _gameMaps0)
                    {
                        if (checkedListMaps.Items.Contains(gameMap))
                        {
                            checkedListMaps.Items.Remove(gameMap);
                        }
                    }
                }

                if (checkedListGameModes.GetItemCheckState(1) == CheckState.Checked)
                {
                    checkedListMaps.Items.AddRange(_gameMaps1);
                }
                else if (checkedListGameModes.GetItemCheckState(1) == CheckState.Unchecked)
                {
                    foreach (var gameMap in _gameMaps1)
                    {
                        if (checkedListMaps.Items.Contains(gameMap))
                        {
                            checkedListMaps.Items.Remove(gameMap);
                        }
                    }
                }
                Console.WriteLine("Ayyyyyy");
            }
        }

        public void InitializeLaunchOptions(string game)
        {
            // JObject launchoptions = JObject.Parse(File.ReadAllText(@"C:\Users\lgast\OneDrive\Documents\GitHub\Beacon\resources\json\gamelaunch\counterstrikesource.json"));
            JObject launchoptions = JObject.Parse(Properties.Resources.ResourceManager.GetString(game));
            JArray matchArray = (JArray)launchoptions["launchoptions"][0]["matchmakingregions"];
            // JArray gamemodesArray = (JArray) launchoptions["launchoptions"][0]["gamemodes"];
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
            // string[] gameModes = gamemodesArray.Select(c => (string) c).ToArray();
            comboBoxMatchRegion.Items.AddRange(matchMakingRegions); 
            checkedListGameModes.Items.AddRange(_gameModes);
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
            Console.WriteLine(sender.ToString());
        }

        private void checkedListMaps_SelectedIndexChanged(object sender, EventArgs e)
        {
            Console.WriteLine(sender.ToString());
        }
    }

    public class StartButton : Button
    {

    }
}
