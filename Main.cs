using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Beacon
{
    public partial class Main : Form
    {
        private const string headerConst = @"\assets\media\header_";
        public static Dictionary<string, Image> headerDictionary = new Dictionary<string, Image>();

        private void InitalizeHeaderDictionary()
        {
            headerDictionary.Add("counterstrikesource", Beacon.Properties.Resources.header_counterstrikesource);
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

            activeGameForm = childGameForm;
            childGameForm.TopLevel = false;
            childGameForm.FormBorderStyle = FormBorderStyle.None;
            childGameForm.Dock = DockStyle.Fill;
            panelChildGameForm.Controls.Add(childGameForm);
            panelChildGameForm.Tag = childGameForm;
            childGameForm.BringToFront();
            childGameForm.Show();
        }
    }
}