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
