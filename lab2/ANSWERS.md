Predictions

5a — ls -a and git status
Prediction: A hidden folder for Git would appear, and git status would say there is nothing to save yet.
Result: A hidden .git folder appeared. git status: no commits yet, nothing to commit.

5b — git restore README.md
Prediction: The nonsense would be erased and the file would come back to the last saved version.
Result: The file went back to the last committed version. Committed work is safe; uncommitted changes are lost.

8 — Before git pull
Prediction: The new commit would not be in my local log, because my computer does not update by itself.
Result: The GitHub commit was not there. It appeared only after git pull.

9 — Switching branches
Prediction: The contact line would not be on main, because I committed it only on add-contact.
Result: No contact line on main; it was there on add-contact. Each branch has its own version of the files.

Questions

Question 5
The staging area lets me choose which changes go into a commit, so each commit stays small and about one thing.

Question 10

* 2652597 (HEAD -> main, origin/main, origin/HEAD) Update README title for GitHub version
*   cb55f0d Merge pull request #1 from pierrediokh04/add-contact
|\
| * 37bd2a2 (origin/add-contact) Add contact line
|/
* d1b427b Add first line to README.md
* 0cf0424 Add a line about GitHub
* bd844f5 Describe the purpose of the repository
* a89983d add README
