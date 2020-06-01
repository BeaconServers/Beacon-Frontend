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
            JObject launchoptions = JObject.Parse(File.ReadAllText(@"C:\Users\lgast\OneDrive\Documents\GitHub\Beacon\resources\json\gamelaunch\counterstrikesource.json"));
            JArray matchArray = (JArray)launchoptions["launchoptions"]["matchmakingregions"];
            string[] matchMakingRegions = matchArray.Select(c => (string) c).ToArray();
            comboBoxMatchRegion.Items.AddRange(matchMakingRegions);
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
    }

    public class StartButton : Button
    {

    }
}
