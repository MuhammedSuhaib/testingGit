# git pull to get latest changes from remote

```
git pull origin main
```

# Go back to a specific commit properly:
Reset current branch to that commit (hard)

```
git checkout main
git reset --hard <commit-hash>
git push -f origin main
```


# backdated Git commit

## Steps:
  - git init
  - git add .
  - Backdate the commit like:
   
   ```
   GIT_COMMITTER_DATE="2025-04-17T12:00:00" git commit --date="2025-04-17T12:00:00" -m "Add index.txt"
   ```
---------------------------------------------------------------------------------------------------------------

   - A simple commit
     ```
       GIT_COMMITTER_DATE="2005-06-19T12:00:00" git commit --date="2005-08-19T12:00:00" -m "Github  development began on October 19, 2005"
     ```
# Create a New branch
```bash
git checkout -b new-branch-name
```

1. Make sure you’re on that branch:

```bash
git checkout your-branch
```

2. Stage changes:

```bash
git add .
```

3. Commit:

```bash
git commit -m "your message"
```

4. Push to GitHub:

```bash
git push origin your-branch
```
5. Clone any specific Branch

```
git clone -b assignment --single-branch https://github.com/MuhammedSuhaib/Rude_maths_teacher.git
```
# To delete a branch:

You can’t delete the branch you’re currently on. First switch to another branch, then delete it:

```bash
git checkout main   # or any other branch
```
then 

**Locally:**

```bash
git branch -d branch-name
```

(use `-D` to force delete if unmerged)

**Remote:**

```bash
git push origin --delete branch-name
```

## to list all branches

```bash
git branch        # local branches
git branch -r     # remote branches
git branch -a     # all branches
```

