import React from "react";

const GITNotes = () => {
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p> Cheatsheet</p>
      </h1>
      {/* <table className="border-4 border-black p-4">
        <thead>
          <tr>
            <th>Command</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>git config</td>
            <td>Configure Git settings.</td>
          </tr>
          <tr>
            <td>git config --global user.name "Your Name"</td>
            <td>Set your name for Git.</td>
          </tr>
          <tr>
            <td>git config --global user.email "youremail@example.com"</td>
            <td>Set your email for Git.</td>
          </tr>
          <tr>
            <td>git config --global color.ui true</td>
            <td>Enable color output.</td>
          </tr>
          <tr>
            <td>git init</td>
            <td>Initialize a new Git repository.</td>
          </tr>
          <tr>
            <td>git clone &lt;repository url&gt;</td>
            <td>Clone an existing repository to your local machine.</td>
          </tr>
          <tr>
            <td>git status</td>
            <td>Show the status of your working directory and staging area.</td>
          </tr>
          <tr>
            <td>git add &lt;file&gt;</td>
            <td>Add a file to the staging area.</td>
          </tr>
          <tr>
            <td>git commit -m "Commit message"</td>
            <td>Commit changes in the staging area with a message.</td>
          </tr>
          <tr>
            <td>git branch</td>
            <td>Show a list of all branches in the repository.</td>
          </tr>
          <tr>
            <td>git branch &lt;branch name&gt;</td>
            <td>Create a new branch with the given name.</td>
          </tr>
          <tr>
            <td>git checkout &lt;branch name&gt;</td>
            <td>Switch to the branch with the given name.</td>
          </tr>
          <tr>
            <td>git merge &lt;branch name&gt;</td>
            <td>
              Merge changes from the specified branch into the current branch.
            </td>
          </tr>
          <tr>
            <td>git remote -v</td>
            <td>Show a list of all remote repositories.</td>
          </tr>
          <tr>
            <td>git remote add &lt;remote name&gt; &lt;remote url&gt;</td>
            <td>Add a new remote repository.</td>
          </tr>
          <tr>
            <td>git push &lt;remote name&gt; &lt;branch name&gt;</td>
            <td>Push changes to the remote repository.</td>
          </tr>
          <tr>
            <td>git pull &lt;remote name&gt; &lt;branch name&gt;</td>
            <td>Pull changes from the remote repository.</td>
          </tr>
          <tr>
            <td>git log</td>
            <td>Show a log of all commits in the repository.</td>
          </tr>
          <tr>
            <td>git diff</td>
            <td>Show a diff of all changes made since the last commit.</td>
          </tr>
          <tr>
            <td>git stash</td>
            <td>Temporarily save changes without committing them.</td>
          </tr>
          <tr>
            <td>git reset</td>
            <td>Unstage changes in the staging area.</td>
          </tr>
          <tr>
            <td>git revert &lt;commit hash&gt;</td>
            <td>Undo changes made in a specific commit.</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default GITNotes;
