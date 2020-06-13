namespace Beacon
{
    partial class GameLauncher
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.imgGame = new System.Windows.Forms.Panel();
            this.comboBoxMatchRegion = new System.Windows.Forms.ComboBox();
            this.labelMatchRegion = new System.Windows.Forms.Label();
            this.labelGameMode = new System.Windows.Forms.Label();
            this.labelMaps = new System.Windows.Forms.Label();
            this.checkedListGameModes = new System.Windows.Forms.CheckedListBox();
            this.checkedListConnections = new System.Windows.Forms.CheckedListBox();
            this.button1 = new System.Windows.Forms.Button();
            this.toolTipConnections = new System.Windows.Forms.ToolTip(this.components);
            this.quesion = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // imgGame
            // 
            this.imgGame.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.imgGame.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.imgGame.Location = new System.Drawing.Point(1, 1);
            this.imgGame.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.imgGame.Name = "imgGame";
            this.imgGame.Size = new System.Drawing.Size(300, 500);
            this.imgGame.TabIndex = 0;
            // 
            // comboBoxMatchRegion
            // 
            this.comboBoxMatchRegion.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.comboBoxMatchRegion.FormattingEnabled = true;
            this.comboBoxMatchRegion.Location = new System.Drawing.Point(309, 26);
            this.comboBoxMatchRegion.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.comboBoxMatchRegion.Name = "comboBoxMatchRegion";
            this.comboBoxMatchRegion.Size = new System.Drawing.Size(223, 28);
            this.comboBoxMatchRegion.TabIndex = 1;
            this.comboBoxMatchRegion.SelectedIndexChanged += new System.EventHandler(this.comboBoxMatchRegion_SelectedIndexChanged);
            // 
            // labelMatchRegion
            // 
            this.labelMatchRegion.AutoSize = true;
            this.labelMatchRegion.ForeColor = System.Drawing.Color.White;
            this.labelMatchRegion.Location = new System.Drawing.Point(305, 9);
            this.labelMatchRegion.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelMatchRegion.Name = "labelMatchRegion";
            this.labelMatchRegion.Size = new System.Drawing.Size(139, 20);
            this.labelMatchRegion.TabIndex = 2;
            this.labelMatchRegion.Text = "Matchmaking Region";
            this.labelMatchRegion.Click += new System.EventHandler(this.label1_Click);
            // 
            // labelGameMode
            // 
            this.labelGameMode.AutoSize = true;
            this.labelGameMode.ForeColor = System.Drawing.Color.White;
            this.labelGameMode.Location = new System.Drawing.Point(309, 88);
            this.labelGameMode.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelGameMode.Name = "labelGameMode";
            this.labelGameMode.Size = new System.Drawing.Size(93, 20);
            this.labelGameMode.TabIndex = 3;
            this.labelGameMode.Text = "Game Modes";
            // 
            // labelMaps
            // 
            this.labelMaps.AutoSize = true;
            this.labelMaps.ForeColor = System.Drawing.Color.White;
            this.labelMaps.Location = new System.Drawing.Point(310, 165);
            this.labelMaps.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelMaps.Name = "labelMaps";
            this.labelMaps.Size = new System.Drawing.Size(86, 20);
            this.labelMaps.TabIndex = 5;
            this.labelMaps.Text = "Connections";
            this.labelMaps.Click += new System.EventHandler(this.labelMaps_Click);
            // 
            // checkedListGameModes
            // 
            this.checkedListGameModes.FormattingEnabled = true;
            this.checkedListGameModes.Location = new System.Drawing.Point(309, 111);
            this.checkedListGameModes.Name = "checkedListGameModes";
            this.checkedListGameModes.Size = new System.Drawing.Size(223, 40);
            this.checkedListGameModes.TabIndex = 6;
            this.checkedListGameModes.SelectedIndexChanged += new System.EventHandler(this.checkedListGameModes_SelectedIndexChanged);
            // 
            // checkedListConnections
            // 
            this.checkedListConnections.FormattingEnabled = true;
            this.checkedListConnections.Location = new System.Drawing.Point(309, 189);
            this.checkedListConnections.Name = "checkedListConnections";
            this.checkedListConnections.Size = new System.Drawing.Size(223, 238);
            this.checkedListConnections.TabIndex = 7;
            this.checkedListConnections.SelectedIndexChanged += new System.EventHandler(this.checkedListConnections_SelectedIndexChanged);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.Lime;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Font = new System.Drawing.Font("Antapani ExtBd", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(309, 434);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(223, 67);
            this.button1.TabIndex = 8;
            this.button1.Text = "Connect";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click_1);
            // 
            // quesion
            // 
            this.quesion.AutoSize = true;
            this.quesion.ForeColor = System.Drawing.SystemColors.ActiveCaption;
            this.quesion.Location = new System.Drawing.Point(516, 166);
            this.quesion.Name = "quesion";
            this.quesion.Size = new System.Drawing.Size(16, 20);
            this.quesion.TabIndex = 9;
            this.quesion.Text = "?";
            this.quesion.Click += new System.EventHandler(this.label1_Click_1);
            this.quesion.MouseHover += new System.EventHandler(this.quesion_MouseHover);
            // 
            // GameLauncher
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(32)))), ((int)(((byte)(64)))));
            this.ClientSize = new System.Drawing.Size(550, 513);
            this.Controls.Add(this.quesion);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.checkedListConnections);
            this.Controls.Add(this.checkedListGameModes);
            this.Controls.Add(this.labelMaps);
            this.Controls.Add(this.labelGameMode);
            this.Controls.Add(this.labelMatchRegion);
            this.Controls.Add(this.comboBoxMatchRegion);
            this.Controls.Add(this.imgGame);
            this.Font = new System.Drawing.Font("Antapani ExtBd", 9.749999F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.Name = "GameLauncher";
            this.Text = "GameLauncher";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel imgGame;
        private System.Windows.Forms.ComboBox comboBoxMatchRegion;
        private System.Windows.Forms.Label labelMatchRegion;
        private System.Windows.Forms.Label labelGameMode;
        private System.Windows.Forms.Label labelMaps;
        private System.Windows.Forms.CheckedListBox checkedListGameModes;
        private System.Windows.Forms.CheckedListBox checkedListConnections;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.ToolTip toolTipConnections;
        private System.Windows.Forms.Label quesion;
    }
}