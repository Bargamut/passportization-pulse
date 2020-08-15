wget --no-check-certificate --quiet \
  --method POST \
  --timeout=0 \
  --header 'Content-Type: application/json' \
  --body-data "{
	\"chat_id\": $TELEGRAM_CHAT_ID,
	\"text\": "$1"
}" \
   "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage"
