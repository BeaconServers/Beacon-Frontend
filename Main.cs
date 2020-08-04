using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Beacon
{
    public partial class Main : Form
    {
        // private const string headerConst = @"\assets\media\header_";
        public static Dictionary<string, Bitmap> headerDictionary = new Dictionary<string, Bitmap>();
        public static Dictionary<string, JObject> jsonLaunchOptions = new Dictionary<string, JObject>();

        public static readonly HttpClient Client = new HttpClient();

        private void InitalizeHeaderDictionary()
        {
            headerDictionary.Add("counterstrikesource", Beacon.Properties.Resources.header_counterstrikesource);
            headerDictionary.Add("teamfortress2", Properties.Resources.header_teamfortress2);
        }

        public Main()
        {
            InitializeComponent();
            InitalizeHeaderDictionary();
        }

        private void btnCounterStrikeSource_Click(object sender, EventArgs e)
        {
            openChildGameForm(new GameLauncher("counterstrikesource"), "counterstrikesource");
        }

        // This probably isn't the most effecient but meh
        private Form activeGameForm = null;
        private void openChildGameForm(Form childGameForm, string game)
        {
            if (activeGameForm != null)
            {
                activeGameForm.Close();
            }

            if (childGameForm.Name.Equals("GameLauncher"))
            {
                activeGameForm = new GameLauncher(game);
            }

            if (childGameForm == null)
            {
                return;
            }

            activeGameForm = childGameForm;
            childGameForm.TopLevel = false;
            childGameForm.FormBorderStyle = FormBorderStyle.None;
            childGameForm.Dock = DockStyle.Fill;
            panelChildGameForm.Controls.Add(childGameForm);
            panelChildGameForm.Tag = childGameForm;
            childGameForm.BringToFront();
            childGameForm.Show();
        }

        private void btnteamfortress2_Click(object sender, EventArgs e)
        {
            openChildGameForm(new GameLauncher("teamfortress2"), "teamfortress2");
            RetriveGameStuff();
        }

        private async void RetriveGameStuff()
        {
            var responseString = await Client.GetStringAsync("http://127.0.0.1/Beacon/games.json");
            Console.WriteLine(responseString);
        }

        private async void RetriveGameLaunchOptions()
        {
            var gamesList = await Client.GetStringAsync("http://127.0.0.1/Beacon/games.json");
            var gamesListParsedObject = JObject.Parse(gamesList);
            if (gamesListParsedObject.SelectToken("games[0]") != null)
            {
                string[] gamesListParsedArray = gamesListParsedObject.SelectToken("games[0]").ToObject<string[]>();
            }

            foreach (string game in gamesListParsedObject)
            {

            }
        }
    }
}