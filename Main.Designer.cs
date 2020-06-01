namespace Beacon
{
    partial class Main
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Main));
            this.panelSideMenu = new System.Windows.Forms.Panel();
            this.btnCounterStrikeSource = new System.Windows.Forms.Button();
            this.panelLogo = new System.Windows.Forms.Panel();
            this.panelChildGameForm = new System.Windows.Forms.Panel();
            this.panelSideMenu.SuspendLayout();
            this.SuspendLayout();
            // 
            // panelSideMenu
            // 
            this.panelSideMenu.AutoScroll = true;
            this.panelSideMenu.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(78)))), ((int)(((byte)(15)))), ((int)(((byte)(140)))));
            this.panelSideMenu.Controls.Add(this.btnCounterStrikeSource);
            this.panelSideMenu.Controls.Add(this.panelLogo);
            this.panelSideMenu.Dock = System.Windows.Forms.DockStyle.Left;
            this.panelSideMenu.Location = new System.Drawing.Point(0, 0);
            this.panelSideMenu.Name = "panelSideMenu";
            this.panelSideMenu.Size = new System.Drawing.Size(200, 561);
            this.panelSideMenu.TabIndex = 1;
            // 
            // btnCounterStrikeSource
            // 
            this.btnCounterStrikeSource.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(100)))), ((int)(((byte)(17)))), ((int)(((byte)(217)))));
            this.btnCounterStrikeSource.Dock = System.Windows.Forms.DockStyle.Top;
            this.btnCounterStrikeSource.FlatAppearance.BorderSize = 0;
            this.btnCounterStrikeSource.FlatAppearance.MouseDownBackColor = System.Drawing.Color.DarkSlateBlue;
            this.btnCounterStrikeSource.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnCounterStrikeSource.Location = new System.Drawing.Point(0, 124);
            this.btnCounterStrikeSource.Margin = new System.Windows.Forms.Padding(3, 10, 3, 10);
            this.btnCounterStrikeSource.Name = "btnCounterStrikeSource";
            this.btnCounterStrikeSource.Size = new System.Drawing.Size(200, 29);
            this.btnCounterStrikeSource.TabIndex = 1;
            this.btnCounterStrikeSource.Text = "Counter Strike: Source";
            this.btnCounterStrikeSource.UseMnemonic = false;
            this.btnCounterStrikeSource.UseVisualStyleBackColor = false;
            this.btnCounterStrikeSource.Click += new System.EventHandler(this.btnCounterStrikeSource_Click);
            // 
            // panelLogo
            // 
            this.panelLogo.Dock = System.Windows.Forms.DockStyle.Top;
            this.panelLogo.Location = new System.Drawing.Point(0, 0);
            this.panelLogo.Name = "panelLogo";
            this.panelLogo.Size = new System.Drawing.Size(200, 124);
            this.panelLogo.TabIndex = 0;
            // 
            // panelChildGameForm
            // 
            this.panelChildGameForm.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panelChildGameForm.Location = new System.Drawing.Point(200, 0);
            this.panelChildGameForm.Name = "panelChildGameForm";
            this.panelChildGameForm.Size = new System.Drawing.Size(734, 561);
            this.panelChildGameForm.TabIndex = 2;
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(32)))), ((int)(((byte)(64)))));
            this.ClientSize = new System.Drawing.Size(934, 561);
            this.Controls.Add(this.panelChildGameForm);
            this.Controls.Add(this.panelSideMenu);
            this.Font = new System.Drawing.Font("Antapani ExtBd", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.Color.White;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.ImeMode = System.Windows.Forms.ImeMode.Hiragana;
            this.Margin = new System.Windows.Forms.Padding(4);
            this.MaximizeBox = false;
            this.MinimumSize = new System.Drawing.Size(950, 600);
            this.Name = "Main";
            this.Text = "Beacon";
            this.panelSideMenu.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panelSideMenu;
        private System.Windows.Forms.Button btnCounterStrikeSource;
        private System.Windows.Forms.Panel panelLogo;
        private System.Windows.Forms.Panel panelChildGameForm;
    }
}